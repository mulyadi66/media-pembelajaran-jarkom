import { useApp } from '../../context/AppContext';
import { kasusDKK } from '../../data/dkk/kasusDKK';

export default function KasusDKK() {
  const { caseAnswers, saveCaseAnswer } = useApp();

  return (
    <div className="content-section">
      {kasusDKK.map(c => (
        <div className="case-card" key={c.id}>
          <span className="case-label"><c.icon size={12} /> {c.tag}</span>
          <h3>{c.title}</h3>
          <p>{c.desc}</p>
          <p><strong>Detail kebutuhan:</strong></p>
          <ul>{c.details.map((d, i) => <li key={i}>{d}</li>)}</ul>
          <p><strong>Tugas:</strong></p>
          <ol>{c.tasks.map((t, i) => <li key={i}>{t}</li>)}</ol>
          <textarea
            className="answer-area"
            placeholder="Tuliskan jawaban kamu di sini..."
            value={caseAnswers[c.id] || ''}
            onChange={e => saveCaseAnswer(c.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
