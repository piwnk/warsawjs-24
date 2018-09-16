import TaskManager from "./task-manager";
// const TaskManager = require("./task-manager");

let taskManager;

describe("TaskManager", () => {
    beforeAll(() => {
        taskManager = new TaskManager();
    });

    test("should be defined in global scope", () => {
        expect(typeof TaskManager).not.toEqual("undefined");
    });

    test("should be a constructor", () => {});
});

describe("methods", () => {
    beforeEach(() => {
        taskManager = new TaskManager();
    });

    test("should be a function", () => {
        expect(taskManager.getList).toBeInstanceOf(Function);
    });

    describe("getList", () => {
        test("should return an array", () => {
            const list = taskManager.getList();
            expect(list).toBeInstanceOf(Array);
        });
        test("the new instance of TaskManager should have an empty queue", () => {
            const list = taskManager.getList();
            expect(list.length).toEqual(0);
        });
    });
});
