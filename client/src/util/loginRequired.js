import swal from "sweetalert";
import { currentUser } from "./currentUser.js";

export async function loginRequired() {
    if (!currentUser) {
        await swal({
            title: "Login Required",
            text: "Please login to continue",
            icon: "warning",
            button: true,
            dangerMode: true,

        })
        window.location.href = '/login'
    }
}
