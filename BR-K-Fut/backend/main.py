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

@app.route("/rodada", methods=["GET"])
def getgames():
    rodata = request.args.get("n", type=str)
    res = supabase.table("Resultados").select("*").or_(f"mandante.eq.{rodata}, visitante.eq.{rodata}").execute()

    if not res.data:
        return jsonify({
            "status": "erro",
            "msg": "Não achamos nem um jogo para esse time"
        })

    return jsonify(res.data)

if __name__ == "__main__":
    app.run()

