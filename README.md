# 🧠 Hierarchical Seq2Seq Multi-Label Text Classifier

This project implements a **Hierarchical Sequence-to-Sequence model** for **multi-label text classification**, served via a **FastAPI backend** and visualized through a **React + Tailwind frontend**.

---

## 🚀 Features

- Custom Hierarchical Seq2Seq model built with PyTorch  
- Multi-label prediction using sigmoid output  
- REST API for inference (FastAPI)  
- Modern frontend built with React + Tailwind  
- Real-time predictions and probability visualization  

---

## 🧩 Project Structure

```
├── train.py                # Train and save the model
├── infer.py                # Command-line inference script
├── app.py                  # FastAPI backend
├── hierarchical_seq2seq_multilabel.pth   # Saved model file
└── frontend/
    ├── src/
    │   ├── App.js          # React UI
    │   └── index.css       # Tailwind styles
    ├── package.json
    └── tailwind.config.js
```

---

## ⚙️ Backend Setup (FastAPI)

### 1. Install dependencies
```bash
pip install fastapi uvicorn torch torchtext
```

### 2. Train the model
```bash
python train.py
```

This saves a file:  
`hierarchical_seq2seq_multilabel.pth`

### 3. Run the API
```bash
python app.py
```

Visit the interactive docs at:  
👉 **http://127.0.0.1:8000/docs**

---

## 🖥️ Frontend Setup (React)

### 1. Navigate to frontend folder
```bash
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

### 4. Open in browser
Go to **http://localhost:3000**

---

## 🔗 Connecting Backend and Frontend

Ensure your backend (`app.py`) is running at  
`http://127.0.0.1:8000`

If needed, update this line in `src/App.js`:
```js
const res = await axios.post("http://127.0.0.1:8000/predict", { text });
```

---

## 📊 Example Output

Input:
```
The movie was emotional and inspiring
```

Output:
```json
{
  "predicted_labels": ["positive", "exciting"],
  "predictions": {
    "positive": 0.82,
    "exciting": 0.73,
    "negative": 0.12
  }
}
```
![Uploading bda 1.png…]()

---

## 🧠 Future Improvements

- Add progress bar visualization for probabilities  
- Integrate pretrained embeddings (GloVe or BERT)  
- Deploy on Docker or Render  
