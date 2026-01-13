from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from supabase import create_client
from dotenv import load_dotenv

#configuraçoes
app = Flask(__name__)
CORS(app)
load_dotenv()

supabase = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_SERVICE_ROLE_KEY"))


#requiciçoes
@app.route("/times", methods=["GET"])
def gettimes():
    pass

@app.route("/rodada", methods=["GET"])
def getgames():
    rodata = request.args.get("n", type=int)
    res = supabase.table("Resultados").select("*").eq("rodata", rodata).execute()

    return jsonify(res.data)

if __name__ == "__main__":
    app.run()

