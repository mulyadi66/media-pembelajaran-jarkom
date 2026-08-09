import { BookOpen } from 'lucide-react';
import Flashcard from '../../components/Flashcard';
import flashcardsKKA from '../../data/kka/flashcardsKKA';

export default function FlashcardPageKKA() {
  return (
    <div className="content-section">
      <div className="materi-card fade-in">
        <h3><BookOpen size={20} /> Flashcard Interaktif KKA</h3>
        <p style={{marginBottom: 16}}>
          Klik kartu untuk membalik dan melihat penjelasan. Gunakan tombol navigasi atau panah untuk berpindah kartu.
        </p>
        <Flashcard cards={flashcardsKKA} />
      </div>
    </div>
  );
}
