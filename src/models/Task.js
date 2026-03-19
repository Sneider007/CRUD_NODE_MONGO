import {Schema,model} from "mongoose";

const taskSchema= new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            //Para limpiar espacios en blanco al inicio y al final del string
            trime:true,
        },
        description: {
            type: String,
            required: true
        },
        done: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true,
        //Omitimos la versión key para versionamiento interno de la biblioteca
        versionKey: false
    }
);

export default model("Task", taskSchema);