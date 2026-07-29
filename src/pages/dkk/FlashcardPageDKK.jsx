import { BookOpen } from 'lucide-react';
import Flashcard from '../../components/Flashcard';
import flashcardsDKK from '../../data/dkk/flashcardsDKK';

export default function FlashcardPageDKK() {
  return (
    <div className="content-section">
      <div className="materi-card fade-in">
        <h3><BookOpen size={20} /> Flashcard Interaktif DKK</h3>
        <p style={{marginBottom: 16}}>
          Klik kartu untuk membalik dan melihat penjelasan. Gunakan tombol navigasi atau panah untuk berpindah kartu.
        </p>
        <Flashcard cards={flashcardsDKK} />
      </div>
    </div>
  );
}
