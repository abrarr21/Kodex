import { useForm } from "react-hook-form";
import { useHabit } from "../context/HabitContext";

const HabitForm = () => {
  const { addHabit } = useHabit();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      category: "Mindset",
      unit: "Minutes",
      priority: "medium",
      startDate: new Date().toISOString().split("T")[0],
    }
  });

  const onCommit = (values) => {
    const payload = {
      ...values,
      id: crypto.randomUUID(),
      completedDates: [],
    };

    addHabit(payload);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onCommit)} className="space-y-4">
      <div>
        <label className="block text-xs text-slate-600 font-medium mb-1">Habit Name</label>
        <input 
          type="text" 
          placeholder="e.g. Morning Exercise" 
          {...register("name", { required: true })} 
          className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 placeholder-slate-400"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-600 font-medium mb-1">Daily Goal</label>
          <input 
            type="number" 
            placeholder="30" 
            {...register("goalValue", { valueAsNumber: true, required: true })} 
            className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 placeholder-slate-400"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-600 font-medium mb-1">Unit</label>
          <select 
            {...register("unit")} 
            className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800"
          >
            <option value="Minutes">Minutes</option>
            <option value="Hours">Hours</option>
            <option value="Times">Times</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-600 font-medium mb-1">Start Date</label>
          <input 
            type="date" 
            {...register("startDate")} 
            className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-600 font-medium mb-1">Category</label>
          <select 
            {...register("category")} 
            className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800"
          >
            <option value="Mindset">Mindset</option>
            <option value="Fitness">Fitness</option>
            <option value="Productivity">Productivity</option>
            <option value="Health">Health</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs text-slate-600 font-medium mb-1">Motivation</label>
        <textarea 
          placeholder="Why is this important to you?" 
          rows="2"
          {...register("motivation")} 
          className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 resize-none placeholder-slate-400"
        ></textarea>
      </div>

      <div>
        <label className="block text-xs text-slate-600 font-medium mb-2">Priority Level</label>
        <div className="flex items-center space-x-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="radio" 
              value="low" 
              {...register("priority")} 
              className="w-4 h-4 text-indigo-600 bg-white border-slate-300 focus:ring-indigo-500"
            />
            <span className="text-xs text-slate-700">Low</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="radio" 
              value="medium" 
              {...register("priority")} 
              className="w-4 h-4 text-indigo-600 bg-white border-slate-300 focus:ring-indigo-500"
            />
            <span className="text-xs text-slate-700">Medium</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="radio" 
              value="high" 
              {...register("priority")} 
              className="w-4 h-4 text-indigo-600 bg-white border-slate-300 focus:ring-indigo-500"
            />
            <span className="text-xs text-slate-700">High</span>
          </label>
        </div>
      </div>

      <div className="pt-2">
        <button 
          type="submit" 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors shadow-sm text-sm"
        >
          Create Habit
        </button>
      </div>
    </form>
  );
};

export default HabitForm;