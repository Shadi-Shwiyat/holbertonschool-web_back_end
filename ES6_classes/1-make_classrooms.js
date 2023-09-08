import ClassRoom from './0-classroom';

function initializeRooms () {
    const classroomArray = [];
    const maxStudents = [19, 20, 34];

    for (const maxNum of maxStudents) {
        const newClassRoom = new ClassRoom(maxNum);
        classroomArray.push(newClassRoom);
    }
    return classroomArray;
}
