import Database from "../Database/index.js";

export function findEnrollmentsForUser(userId) {
    const { enrollments } = Database;
    return enrollments.filter((enrollment) => enrollment.user === userId);
}

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unenrollUserInCourse(enrollmentId) {
    const { enrollments } = Database;
    const newEnrollments = enrollments.filter((enrollment) => enrollment._id.toString() !== enrollmentId.toString());
    console.log(newEnrollments);
    Database.enrollments = newEnrollments;
}
