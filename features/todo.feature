Feature: ToDo List
    As a user
    I want to add tasks to my ToDo List
    so I can remember what I have to do

    Scenario: Enter to my ToDo list
        Given that I enter to the application
        Then I can see "My ToDo List"
    
    Scenario: Add task to my ToDo list
        Given I can see "My ToDo List"
        When I enter "My task" in the task input
        And press "Add task" button
        Then I see "My task" in the "todoList"

    Scenario: I want to mark tasks as completed
        Given I see "My task" on the "todoList"
        When press the "complete_task" button of "My task"
        Then I see "My task" on the "completedList"

    Scenario: I want to delete a task
    Scenario: I want to edit a task