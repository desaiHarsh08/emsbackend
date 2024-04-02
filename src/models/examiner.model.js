import mongoose from "mongoose";

const examinerSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        userType: {
            type: String,
            default: "EXAMINER"
        },
        phone: {
            type: String,
            required: true,
        },
        examName: {
            type: String,
            required: true,
        },
        examDate: {
            type: Date,
            default: Date.now
        },
        examTime: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
        },
        examId: {
            type: String,
        },
        from: {
            type: String
        },
        to: {
            type: String
        },
        total: {
            type: Number
        },
        paperChecking: {
            lastDateChecking: {
                type: String,
                default: ''
            },
            lastDateMarksUpload: {
                type: String,
                default: ''
            },
        },
        dateChecking: {
            type: String,
            default: ''
        },
        dateMarksUpload: {
            type: String,
            default: ''
        },
    }, 
    { timestamps: true}
);


export const Examiner = mongoose.model('Examiner', examinerSchema);