const http = require('http');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

let tasks = [];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/' && method === 'GET') {
        fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>Internal Server Error</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const renderedTasks = tasks.map(task => renderTask(task)).join('');
                data = data.replace('{{tasks}}', renderedTasks);
                res.end(data);
            }
        });
    } else if (url === '/add_task' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const taskContent = decodeURIComponent(body.split('=')[1]);
            if (taskContent) {
                const task = { id: uuidv4(), content: taskContent, completed: false };
                tasks.push(task);
                const renderedTask = renderTask(task);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(renderedTask);
            } else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Invalid request');
            }
        });
    } else if (url.startsWith('/complete_task/') && method === 'PATCH') {
        const taskId = url.split('/')[2];
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
            const renderedTask = renderTask(task);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(renderedTask);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Task not found');
        }
    } else if (url.startsWith('/delete_task/') && method === 'DELETE') {
        const taskId = url.split('/')[2];
        tasks = tasks.filter(task => task.id !== taskId);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page Not Found</h1>');
    }
});

const renderTask = (task) => {
    return `
        <li id="task-${task.id}">
            <input type="checkbox" onchange="completeTask('${task.id}')" ${task.completed ? 'checked' : ''}>
            <span ${task.completed ? 'style="text-decoration: line-through;"' : ''}>${task.content}</span>
            <button onclick="deleteTask('${task.id}')">Delete</button>
        </li>
    `;
};

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
