git clone https://github.com/tomwls/django_blog.git
npm install
python -m venv env
env\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

tailwind output.css file:
npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --watch