import model from "./model.js";

export async function findCoursesForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    const data = enrollments.map((enrollment) => enrollment.course);
    if (data.length == 0) {
        return [];
    } else {
        return data;
    }
   }

export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
}

export function enrollUserInCourse(user, course) {
    return model.create({ user, course });
}

export function unenrollUserInCourse(user, course) {
    return model.deleteOne({ user, course });
}


