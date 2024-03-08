// index.js

// FlexCode - A dynamic coding platform crafted to ignite creativity and nurture collaboration across developers of varying expertise.

// Coding platform functionality
class FlexCode {
    constructor() {
        this.users = [];
        this.projects = {};
    }

    // Method to add a new user
    addUser(username, expertise) {
        const user = {
            username: username,
            expertise: expertise
        };
        this.users.push(user);
    }

    // Method to create a new project
    createProject(projectName, description, collaborators) {
        const project = {
            description: description,
            collaborators: collaborators
        };
        this.projects[projectName] = project;
    }

    // Method to display all projects
    displayProjects() {
        console.log("All Projects:");
        for (const [projectName, project] of Object.entries(this.projects)) {
            console.log(`${projectName}:`);
            console.log(`Description: ${project.description}`);
            console.log(`Collaborators: ${project.collaborators.join(", ")}`);
            console.log("--------------------------");
        }
    }
}

// Example usage:
const flexCodeApp = new FlexCode();

// Adding users
flexCodeApp.addUser("user1", "Beginner");
flexCodeApp.addUser("user2", "Intermediate");
flexCodeApp.addUser("user3", "Expert");

// Creating projects
flexCodeApp.createProject("Real-Time Chat Application", "Develop a real-time chat application using WebSocket technology.", ["user1", "user2"]);
flexCodeApp.createProject("E-commerce Website", "Build an e-commerce website with user authentication and product listing features.", ["user2", "user3"]);

// Displaying projects
flexCodeApp.displayProjects();
