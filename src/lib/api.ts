import { toast } from "sonner"

function request() {
    toast("Your request was completed!", {
        description: "It was a long journey, but we made it!",
        action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
        },
    });
}


export {
    request
}