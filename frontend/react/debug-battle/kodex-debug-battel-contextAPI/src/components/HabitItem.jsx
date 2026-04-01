import { useState } from "react";
import { useHabit } from "../context/HabitContext";

const HabitItem = ({ habit }) => {
  const { toggleHabit, deleteHabit, updateHabit, getStreak } = useHabit();

  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState(habit);

  const today = new Date().toISOString().split("T")[0];
  const isDoneToday = habit.completedDates.includes(today);

  const handleSave = () => {
    updateHabit(habit.id, editData);
    setEditing(false);
  };

  return (
    <div className="bg-white border text-sm border-slate-200 rounded-xl p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] transition-all hover:shadow-[0_4px_15px_-4px_rgba(6,81,237,0.1)]">
      {editing ? (
        <div className="flex items-center gap-3">
          <input
            className="flex-1 px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800"
            value={editData.name || ""}
            onChange={(e) => setEditData({...editData, name: e.target.value})}
            autoFocus
          />
          <button onClick={handleSave} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md text-sm transition-colors">Save</button>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          {/* Top Row: Tags & Streak */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-2 isolate">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${habit.category === 'Mindset' ? 'text-indigo-600 bg-indigo-50' : habit.category === 'Fitness' ? 'text-emerald-600 bg-emerald-50' : habit.category === 'Health' ? 'text-rose-600 bg-rose-50' : 'text-slate-600 bg-slate-100'}`}>
                {habit.category || 'Category'}
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${habit.priority === 'high' ? 'text-red-500 bg-red-50' : habit.priority === 'medium' ? 'text-orange-500 bg-orange-50' : 'text-slate-500 bg-slate-50'}`}>
                {habit.priority || 'Priority'}
              </span>
            </div>
            
            <div className="flex flex-col items-center">
               <div className="text-slate-800 font-bold text-sm flex items-center justify-center gap-1">
                  {getStreak(habit.completedDates || [])} 
                  <span className="text-orange-500 text-xs">🔥</span>
               </div>
               <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Streak</div>
            </div>
          </div>

          {/* Middle Row: Name & Motivation */}
          <div className="mb-6 flex-1">
            <h4 className="text-slate-800 font-bold text-base leading-snug">{habit.name}</h4>
            {habit.motivation && <p className="text-slate-400 text-xs mt-1.5">{habit.motivation}</p>}
          </div>

          {/* Bottom Row: Goal & Actions */}
          <div className="flex justify-between items-end mt-auto pt-4 border-t border-slate-50">
            <div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Goal</div>
               <div className="text-slate-600 text-xs font-medium">{habit.goalValue || '-'} {habit.unit || ''}</div>
            </div>
            
            <div className="flex items-center gap-4">
              <button onClick={() => setEditing(true)} className="text-[11px] font-semibold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider">
                Edit
              </button>
              <button onClick={() => deleteHabit(habit.id)} className="text-[11px] font-semibold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-wider">
                Delete
              </button>
              <button 
                onClick={() => toggleHabit(habit.id)} 
                className={`px-4 py-1.5 rounded text-xs font-bold transition-all duration-300 ${isDoneToday ? 'bg-indigo-50 text-indigo-600 shadow-inner' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'}`}
              >
                {isDoneToday ? 'Completed' : 'Complete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HabitItem;