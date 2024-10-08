# WeddingBookingApp Backend

This is the backend for the WeddingBookingApp project, built using Django.

## Prerequisites

- Python
- Django
- PostgreSQL (or any preferred database)

## Installation

1. Clone the repository:

2. Create a Python virtual environment and activate it:
    ```bash
    conda/.venv/poetry
    ```

3. (Alternative: traditional method) Create a Python `venv`. Run these commands in order from the root of the repo:
    ```bash
    python -m venv "wba_env"
    source wba_env/bin/activate
    ```

4. cd into `backend/djangoproject`

5. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

6. Set up the database:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

7. Create a superuser:
    ```bash
    python manage.py createsuperuser
    ```

8. Run the development server:
    ```bash
    python manage.py runserver
    ```

## Configuration

- Update the `settings.py` file with your database configuration and other settings as needed.

## Usage

- Access the admin panel at `http://127.0.0.1:8000/admin/` and log in with the superuser credentials.

## Contact

For any inquiries, please contact [Gunnar Tjensvold](https://github.com/gunnartjensvold).
