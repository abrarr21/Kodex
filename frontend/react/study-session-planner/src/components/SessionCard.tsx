import { Session } from '../context/SessionContext'
import { useSession } from '../context/SessionContext'

interface Props {
  session: Session
  index: number
}

const subjectIcons: Record<string, string> = {
  DSA: '⚡',
  'Web Dev': '🌐',
  DBMS: '🗄',
  OS: '⚙️',
  Other: '📖',
}

export default function SessionCard({ session, index }: Props) {
  const { deleteSession } = useSession()

  const priorityBorderClass =
    session.priority === 'High'
      ? 'priority-high'
      : session.priority === 'Medium'
        ? 'priority-medium'
        : 'priority-low'

  const badgeClass =
    session.priority === 'High'
      ? 'badge-high'
      : session.priority === 'Medium'
        ? 'badge-medium'
        : 'badge-low'

  const priorityDotClass =
    session.priority === 'High'
      ? 'bg-crimson-400'
      : session.priority === 'Medium'
        ? 'bg-amber-400'
        : 'bg-sage-400'

  return (
    <div
      className={`
        group relative bg-ink-800/40 backdrop-blur-sm rounded-xl p-5
        border border-ink-700/60 hover:border-ink-600
        ${priorityBorderClass}
        transition-all duration-300 hover:bg-ink-800/60
        animate-slide-in
      `}
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'both' }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <span className="text-base flex-shrink-0">{subjectIcons[session.subject] ?? '📖'}</span>
          <h3 className="font-display font-bold text-ink-100 text-sm leading-snug truncate">
            {session.topic}
          </h3>
        </div>
        <button
          onClick={() => deleteSession(session.id)}
          className="flex-shrink-0 opacity-0 group-hover:opacity-100 w-7 h-7 flex items-center justify-center rounded-lg bg-crimson-500/10 border border-crimson-500/20 text-crimson-400 hover:bg-crimson-500/20 transition-all duration-200 text-xs"
          aria-label="Delete session"
        >
          ✕
        </button>
      </div>

      {/* Metadata row */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-mono text-xs text-ink-400 bg-ink-700/50 px-2.5 py-1 rounded-md">
          {session.subject}
        </span>
        <span className="font-mono text-xs text-ink-400">
          {session.duration} min
        </span>
        <span className="font-mono text-xs text-ink-500 ml-auto">
          {new Date(session.date + 'T00:00:00').toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </span>
      </div>

      {/* Priority badge */}
      <div className="mt-3 flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${priorityDotClass}`} />
        <span className={`text-xs font-display font-semibold px-2 py-0.5 rounded-md ${badgeClass}`}>
          {session.priority}
        </span>
      </div>
    </div>
  )
}
