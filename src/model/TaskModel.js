export class TaskModel {
    constructor(title, description, status, date) {
        this.date = date
        this.title = title
        this.status = status
        this.description = description
    }
}