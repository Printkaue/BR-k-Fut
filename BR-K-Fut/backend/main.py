from flask import Flask, jsonify, request
import os
from werkzeug.utils import secure_filename
from supabase import create_client
from dotenv import load_dotenv

#configuraçoes
app = Flask(__name__)

load_dotenv()

supabase = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_SERVICE_ROLE_KEY"))


#requiciçoes
@app.route("/times", methods=["GET"])
def gettimes():
    pass

if __name__ == "__main__":
    app.run()

