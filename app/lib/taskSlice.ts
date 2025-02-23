import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface Task {
    id: string;
    name: string;
    description: string;
    dueDate: Date;
    completed: boolean;

}


const initialState : Task[] =
 typeof window !== "undefined" && localStorage.getItem("tasks") 
? JSON.parse(localStorage.getItem("tasks") || "[]" ) : [];


const taskSlice = createSlice({
    name: "tasks",
    
    initialState,
    reducers: {
        addTask: (state , action : PayloadAction<Task>) => {
            state.push(action.payload);
            localStorage.setItem("tasks" , JSON.stringify(state));
        },
        deleteTask: (state, action : PayloadAction<string>) => {
            const filterdState = state.filter((task) => task.id !== action.payload);

            localStorage.setItem("tasks" , JSON.stringify(filterdState));
            
            return filterdState; 
        },
        editTask:(state , action : PayloadAction<Task>) => {
            const {id , name , description , dueDate , completed} = action.payload;
            const task = state.find(task => task.id === id);

            if(task) {
                task.name= name;
                task.description = description;
                task.dueDate = dueDate;
                task.completed= completed;
            }
            localStorage.setItem("tasks" , JSON.stringify(state));
        },
        toggleComplate: (state, action: PayloadAction<string>) => { 
            const task = state.find(task => task.id === action.payload);
            
            if(task) {
                task.completed =!task.completed;
                localStorage.setItem("tasks" , JSON.stringify(state));
            }

        }
        
    }
});



export const { addTask , deleteTask ,editTask , toggleComplate } = taskSlice.actions;
export default taskSlice.reducer;



