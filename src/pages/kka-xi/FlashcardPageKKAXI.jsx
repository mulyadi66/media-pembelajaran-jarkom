import { BookOpen } from 'lucide-react';
import Flashcard from '../../components/Flashcard';
import flashcardsKKAXI from '../../data/kka-xi/flashcardsKKAXI';

export default function FlashcardPageKKAXI() {
  return (
    <div className="content-section">
      <div className="materi-card fade-in">
        <h3><BookOpen size={20} /> Flashcard Interaktif KKA XI</h3>
        <p style={{marginBottom: 16}}>
          Klik kartu untuk membalik dan melihat penjelasan. Gunakan tombol navigasi atau panah untuk berpindah kartu.
        </p>
        <Flashcard cards={flashcardsKKAXI} />
      </div>
    </div>
  );
}
