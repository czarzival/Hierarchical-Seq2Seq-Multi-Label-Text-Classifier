import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/predict", { text });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching prediction. Check backend connection.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-2xl p-8 shadow-xl w-full max-w-xl text-white">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-400">
          Hierarchical Seq2Seq Multi-Label Classifier
        </h1>

        <textarea
          className="w-full h-32 p-3 bg-gray-700 rounded-lg outline-none mb-4 text-white"
          placeholder="Enter text to classify..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={handlePredict}
          className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-semibold"
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>

        {result && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-green-400">
              Predicted Labels:
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {result.predicted_labels.length > 0 ? (
                result.predicted_labels.map((lbl) => (
                  <span
                    key={lbl}
                    className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    {lbl}
                  </span>
                ))
              ) : (
                <p className="text-gray-400">No labels above threshold</p>
              )}
            </div>

            <h3 className="text-lg font-semibold text-blue-300">
              Prediction Probabilities:
            </h3>
            <div className="bg-gray-700 rounded-lg p-3 mt-2">
              {Object.entries(result.predictions).map(([label, prob]) => (
                <div
                  key={label}
                  className="flex justify-between border-b border-gray-600 py-1"
                >
                  <span>{label}</span>
                  <span className="font-mono">{prob.toFixed(3)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
