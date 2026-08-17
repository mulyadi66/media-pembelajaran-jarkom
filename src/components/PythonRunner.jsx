import { useState, useRef, useCallback } from 'react';
import { Play, Loader2, Trash2 } from 'lucide-react';

let pyodideInstance = null;
let pyodideLoading = false;
let pyodidePromise = null;

async function loadPyodide() {
  if (pyodideInstance) return pyodideInstance;
  if (pyodidePromise) return pyodidePromise;

  pyodideLoading = true;
  pyodidePromise = (async () => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
    script.async = true;
    await new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = () => reject(new Error('Gagal memuat Pyodide. Periksa koneksi internet.'));
      document.head.appendChild(script);
    });
    pyodideInstance = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
    });
    pyodideLoading = false;
    return pyodideInstance;
  })();

  return pyodidePromise;
}

const DEFAULT_CODE = `# Tulis kode Python di sini!
print("Hello, World!")

nama = "Siswa KKA XI"
umur = 16
print(f"Halo, saya {nama} berumur {umur} tahun")
`;

export default function PythonRunner({ code: initialCode, height = 180 }) {
  const [code, setCode] = useState(initialCode || DEFAULT_CODE);
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const textareaRef = useRef(null);

  const runCode = useCallback(async () => {
    setStatus('loading');
    setOutput('');
    setErrorMsg('');

    try {
      const pyodide = await loadPyodide();

      pyodide.setStdout({ batched: (text) => setOutput((prev) => prev + text) });
      pyodide.setStderr({ batched: (text) => setErrorMsg((prev) => prev + text) });

      await pyodide.runPythonAsync(code);
      setStatus('done');
    } catch (err) {
      setErrorMsg(String(err.message || err));
      setStatus('error');
    }
  }, [code]);

  const clearOutput = () => {
    setOutput('');
    setErrorMsg('');
    setStatus('idle');
  };

  return (
    <div className="py-runner">
      <div className="py-runner-header">
        <span className="py-runner-badge">Python</span>
        <div className="py-runner-actions">
          <button className="py-runner-btn clear" onClick={clearOutput} title="Clear output">
            <Trash2 size={14} />
          </button>
          <button
            className="py-runner-btn run"
            onClick={runCode}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <><Loader2 size={14} className="spin" /> Memuat...</>
            ) : (
              <><Play size={14} /> Run</>
            )}
          </button>
        </div>
      </div>

      <div className="py-editor-wrap">
        <textarea
          ref={textareaRef}
          className="py-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          style={{ minHeight: height }}
        />
      </div>

      {(output || errorMsg || status === 'done') && (
        <div className="py-output-wrap">
          <div className="py-output-header">Output</div>
          <pre className={`py-output ${errorMsg ? 'error' : ''}`}>
            {output}
            {errorMsg && <span className="py-error">{errorMsg}</span>}
            {!output && !errorMsg && status === 'done' && (
              <span className="py-no-output">(tidak ada output)</span>
            )}
          </pre>
        </div>
      )}
    </div>
  );
}
