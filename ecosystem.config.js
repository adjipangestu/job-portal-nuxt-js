module.exports = {
    apps : [{
       name : 'job-client', // App name that shows in `pm2 ls`, the name you used to create your nuxt.js application
       exec_mode : 'cluster', // enables clustering
       instances : '2', // or an integer
       cwd : './current', // only if using a subdirectory
       "script": "npm",
       "args": "start"
    }]
};
