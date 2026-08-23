import { useState, useCallback } from 'react';
import { Play, Loader2, Trash2 } from 'lucide-react';

let pyodideInstance = null;
let pyodideLoadPromise = null;

function getPyodide() {
  if (pyodideInstance) return Promise.resolve(pyodideInstance);
  if (pyodideLoadPromise) return pyodideLoadPromise;

  pyodideLoadPromise = (async () => {
    try {
      if (!window.loadPyodide) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
        script.crossOrigin = 'anonymous';
        await new Promise((res, rej) => {
          script.onload = res;
          script.onerror = () => rej(new Error('Gagal memuat Pyodide.js'));
          document.head.appendChild(script);
        });
      }
      pyodideInstance = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
      });
      return pyodideInstance;
    } catch (err) {
      pyodideLoadPromise = null;
      throw err;
    }
  })();

  return pyodideLoadPromise;
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
  const [loadingMsg, setLoadingMsg] = useState('');

  const runCode = useCallback(async () => {
    setStatus('loading');
    setLoadingMsg('Memuat Python runtime...');
    setOutput('');

    try {
      const pyodide = await getPyodide();

      setLoadingMsg('Menjalankan kode...');

      const stdout = [];
      const stderr = [];

      pyodide.setStdout({
        batched: (text) => stdout.push(text),
      });
      pyodide.setStderr({
        batched: (text) => stderr.push(text),
      });

      try {
        await pyodide.runPythonAsync(code);
      } catch (runErr) {
        stderr.push(String(runErr.message || runErr));
      }

      const outStr = stdout.join('');
      const errStr = stderr.join('');

      setOutput(outStr);
      if (errStr) {
        setOutput(outStr ? outStr + '\n' + errStr : errStr);
      }
      setStatus(errStr && !outStr ? 'error' : 'done');
    } catch (err) {
      setOutput('Error: ' + String(err.message || err));
      setStatus('error');
    }
  }, [code]);

  const clearOutput = () => {
    setOutput('');
    setStatus('idle');
    setLoadingMsg('');
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
              <><Loader2 size={14} className="spin" /> {loadingMsg || 'Memuat...'}</>
            ) : (
              <><Play size={14} /> Run</>
            )}
          </button>
        </div>
      </div>

      <div className="py-editor-wrap">
        <textarea
          className="py-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          style={{ minHeight: height }}
        />
      </div>

      {status !== 'idle' && (
        <div className="py-output-wrap">
          <div className="py-output-header">
            {status === 'loading' ? 'Menjalankan...' : status === 'error' ? 'Error' : 'Output'}
          </div>
          <pre className={`py-output ${status === 'error' ? 'error' : ''}`}>
            {output || (status === 'loading' ? '...' : '(tidak ada output)')}
          </pre>
        </div>
      )}
    </div>
  );
}
