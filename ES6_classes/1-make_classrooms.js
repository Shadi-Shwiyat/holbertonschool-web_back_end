import ClassRoom from './0-classroom';

export default function initializeRooms () {
    const classroomArray = [];
    const maxStudents = [19, 20, 34];

    for (const maxNum of maxStudents) {
        const newClassRoom = new ClassRoom(maxNum);
        classroomArray.push(newClassRoom);
    }
    return classroomArray;
}
