import { useHabit } from "../context/HabitContext";
import HabitItem from "./HabitItem";

const HabitList = () => {
  const { habits, showAll, setShowAll } = useHabit();

  const today = new Date().toISOString().split("T")[0];

  if (!habits || habits.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-slate-50 border border-slate-200 rounded-lg max-w-lg mx-auto mt-12 mx-8 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-2">No habits yet</h3>
        <p className="text-sm text-slate-500 text-center">
          Start your journey by adding a new habit above.
        </p>
      </div>
    );
  }

  const completedToday = habits.filter((h) =>
    h.completedDates.includes(today),
  ).length;

  const progressPercent = Math.round((completedToday / habits.length) * 100);

  const topCategory =
    habits.reduce((acc, h) => {
      if (h.category) {
        acc[h.category] = (acc[h.category] || 0) + 1;
      }
      return acc;
    }, {});

  const mainFocus = Object.keys(topCategory).length > 0 
    ? Object.keys(topCategory).reduce((a, b) =>
        topCategory[a] > topCategory[b] ? a : b,
      )
    : 'None';

  const highPriorityCount = habits.filter(h => h.priority === 'high').length;

  const visibleHabits = showAll ? habits : habits.slice(0, 3);

  return (
    <div className="max-w-md mx-auto mt-6 px-4 pb-20">
      {/* Daily Progress Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 mb-8 shadow-sm">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Daily Progress</span>
          <span className="text-xs font-semibold text-slate-600">{completedToday} / {habits.length}</span>
        </div>
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">Keep going</h2>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-2 mt-4 mb-5 overflow-hidden">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out" 
            style={{width: `${progressPercent}%`}}
          ></div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Focus</div>
            <div className="text-sm font-bold text-slate-800">{mainFocus}</div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Priority</div>
            <div className="text-sm font-bold text-slate-800">{highPriorityCount} High Tasks</div>
          </div>
        </div>
      </div>

      {/* Routine Header */}
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Your Routine</h3>

      <div className="space-y-4">
        {visibleHabits.map((habit, index) => (
          <HabitItem key={habit.id || index} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default HabitList;