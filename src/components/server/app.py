from flask import Flask  # 서버 구현을 위한 Flask 객체 import
from flask import request
from flask_restx import Api, Resource  # Api 구현을 위한 Api 객체 import
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer
import json
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

def cached_model():
    model = SentenceTransformer('jhgan/ko-sroberta-multitask')
    return model

def get_dataset():
    df = pd.read_csv('wellness_dataset.csv')
    df['embedding'] = df['embedding'].apply(json.loads)
    return df

model = cached_model()
df = get_dataset()

        
@api.route('/chatbot/<string:user_input>')
class chatbot(Resource):
    def get(self, user_input):
        embedding = model.encode(user_input)

        df['distance'] = df['embedding'].map(lambda x: cosine_similarity([embedding], [x]).squeeze())
        answer = df.loc[df['distance'].idxmax()]

        return {"response":answer['챗봇']}