import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession, Subject, Priority } from "../context/SessionContext";

interface FormData {
    topic: string;
    subject: Subject;
    duration: number;
    priority: Priority;
    date: string;
}

const subjects: Subject[] = ["DSA", "Web Dev", "DBMS", "OS", "Other"];
const priorities: Priority[] = ["Low", "Medium", "High"];

export default function SessionForm() {
    const { addSession } = useSession();

    const [selectedSubject, setSelectedSubject] = useState<Subject>("DSA");
    const [selectedPriority, setSelectedPriority] =
        useState<Priority>("Medium");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<FormData>({
        defaultValues: {
            subject: "DSA",
            priority: "Medium",
            date: new Date().toISOString().split("T")[0],
        },
    });

    const onSubmit = (data: FormData) => {
        addSession({
            topic: data.topic,
            subject: data.subject,
            duration: Number(data.duration),
            priority: data.priority,
            date: data.date,
        });
        reset({
            topic: "",
            subject: "DSA",
            priority: "Medium",
            date: new Date().toISOString().split("T")[0],
        });
        setSelectedSubject("DSA");
        setSelectedPriority("Medium");
    };

    const inputClass =
        "w-full bg-ink-800/60 border border-ink-700 rounded-lg px-4 py-3 text-ink-100 font-body text-sm placeholder-ink-500 focus:outline-none focus:border-ink-500 focus:ring-1 focus:ring-ink-500/50 transition-all duration-200";

    const labelClass =
        "block text-xs font-display font-semibold uppercase tracking-widest text-ink-400 mb-2";

    return (
        <div className="animate-fade-up">
            {/* Header */}
            <div className="mb-8">
                <p className="font-mono text-xs text-ink-500 tracking-wider uppercase mb-2">
                    New Entry
                </p>
                <h2 className="font-display text-2xl font-bold text-ink-100">
                    Plan a Session
                </h2>
                <div className="mt-3 h-px bg-gradient-to-r from-ink-600 to-transparent" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Topic */}
                <div>
                    <label className={labelClass}>Topic Name</label>
                    <input
                        {...register("topic", {
                            required: "Topic is required",
                        })}
                        placeholder="e.g. Linked List"
                        className={`${inputClass} ${errors.topic ? "border-crimson-500/50" : ""}`}
                    />
                    {errors.topic && (
                        <p className="mt-1.5 text-xs text-crimson-400 font-mono">
                            {errors.topic.message}
                        </p>
                    )}
                </div>

                {/* Subject */}
                <div>
                    <label className={labelClass}>Subject</label>
                    <div className="grid grid-cols-5 gap-2">
                        {subjects.map((sub) => (
                            <label key={sub} className="cursor-pointer">
                                <input
                                    type="radio"
                                    value={sub}
                                    {...register("subject")}
                                    className="sr-only"
                                    onChange={() => setSelectedSubject(sub)}
                                />
                                <span
                                    className={`
                                        flex items-center justify-center py-2 px-1 rounded-lg text-xs font-display font-semibold
                                        border transition-all duration-200 cursor-pointer
                                        ${
                                            selectedSubject === sub
                                                ? "bg-ink-600 border-ink-400 text-ink-100"
                                                : "bg-ink-800/40 border-ink-700 text-ink-400 hover:border-ink-500 hover:text-ink-300"
                                        }
                                    `}
                                >
                                    {sub}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Duration + Date */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className={labelClass}>Duration (min)</label>
                        <input
                            type="number"
                            {...register("duration", {
                                required: "Required",
                                min: { value: 10, message: "Min 10 minutes" },
                                valueAsNumber: true,
                            })}
                            placeholder="60"
                            className={`${inputClass} ${errors.duration ? "border-crimson-500/50" : ""}`}
                        />
                        {errors.duration && (
                            <p className="mt-1.5 text-xs text-crimson-400 font-mono">
                                {errors.duration.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className={labelClass}>Date</label>
                        <input
                            type="date"
                            {...register("date", { required: "Required" })}
                            className={inputClass}
                        />
                    </div>
                </div>

                {/* Priority */}
                <div>
                    <label className={labelClass}>Priority</label>
                    <div className="grid grid-cols-3 gap-3">
                        {priorities.map((p) => (
                            <label key={p} className="cursor-pointer">
                                <input
                                    type="radio"
                                    value={p}
                                    {...register("priority")}
                                    className="sr-only"
                                    onChange={() => setSelectedPriority(p)}
                                />
                                <span
                                    className={`
                                        flex items-center justify-center py-2.5 rounded-lg text-sm font-display font-bold
                                        border transition-all duration-200 cursor-pointer
                                        ${
                                            selectedPriority === p
                                                ? p === "High"
                                                    ? "bg-crimson-500/20 border-crimson-400 text-crimson-400"
                                                    : p === "Medium"
                                                      ? "bg-amber-500/20 border-amber-400 text-amber-400"
                                                      : "bg-sage-500/20 border-sage-400 text-sage-400"
                                                : "bg-ink-800/40 border-ink-700 text-ink-400 hover:border-ink-500"
                                        }
                                    `}
                                >
                                    {selectedPriority === p && (
                                        <span className="mr-1.5">●</span>
                                    )}
                                    {p}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full py-3.5 bg-ink-100 text-ink-900 rounded-lg font-display font-bold text-sm tracking-wide hover:bg-ink-200 active:scale-[0.98] transition-all duration-200"
                    >
                        Add Session →
                    </button>
                    {isSubmitSuccessful && (
                        <p className="text-center text-xs text-sage-400 font-mono mt-3 animate-fade-up">
                            ✓ Session added successfully
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}
