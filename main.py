# app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

# Placeholder data
fruits_and_vegetables_data = [
    {'name': 'Apple', 'nutrients': {'vitaminC': 10, 'fiber': 5}, 'diseases': ['Diabetes'], 'suitableDiseases': ['Common cold']},
    # Add more data as needed
]

@app.route('/search', methods=['POST'])
def search():
    user_input = request.json.get('input')

    # Placeholder logic for searching data
    results = []
    for item in fruits_and_vegetables_data:
        if user_input.lower() in item['name'].lower() or user_input.lower() in item['nutrients']:
            results.append(item)

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
