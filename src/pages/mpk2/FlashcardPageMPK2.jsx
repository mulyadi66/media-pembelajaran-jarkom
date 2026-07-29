import { BookOpen } from 'lucide-react';
import Flashcard from '../../components/Flashcard';
import flashcardsMPK2 from '../../data/mpk2/flashcardsMPK2';

export default function FlashcardPageMPK2() {
  return (
    <div className="content-section">
      <div className="materi-card fade-in">
        <h3><BookOpen size={20} /> Flashcard Interaktif MPK 2</h3>
        <p style={{marginBottom: 16}}>
          Klik kartu untuk membalik dan melihat penjelasan. Gunakan tombol navigasi atau panah untuk berpindah kartu.
        </p>
        <Flashcard cards={flashcardsMPK2} />
      </div>
    </div>
  );
}