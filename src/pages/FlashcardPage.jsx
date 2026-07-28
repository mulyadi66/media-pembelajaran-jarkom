import { BookOpen } from 'lucide-react';
import Flashcard from '../components/Flashcard';
import flashcardData from '../data/flashcards';

export default function FlashcardPage() {
  return (
    <div className="content-section">
      <div className="materi-card fade-in">
        <h3><BookOpen size={20} /> Flashcard Interaktif</h3>
        <p style={{marginBottom: 16}}>
          Klik kartu untuk membalik dan melihat penjelasan. Gunakan tombol navigasi atau panah untuk berpindah kartu.
        </p>
        <Flashcard cards={flashcardData} />
      </div>
    </div>
  );
}
