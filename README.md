# RealEstate

A **real estate web application** built with **Django**, **Python**, **Bootstrap**, **Vanilla JavaScript**, and **jQuery**.  
This project allows users to explore property listings, contact agents, and manage real estate data in a simple, intuitive interface.


## Project Structure

| Folder | Purpose |
|--------|---------|
| `accounts/` | Authentication & user profile logic |
| `listings/` | Real estate listing models & views |
| `contacts/` | Contact inquiry handling |
| `realtors/` | Realtor-specific features |
| `templates/` | HTML templates |
| `screenshots/` | UI screenshots (optional) |
| `media/` | Uploaded property images |
| `requirements.txt` | Python dependencies |
| `manage.py` | Django project runner |

---

## Requirements

Before running the project locally, ensure you have:

- Python 3.8+
- Django (as listed in `requirements.txt`)
- PostgreSQL (optional, can be swapped for SQLite)
- Virtual environment (recommended)

---

## Quick Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/alvinshaita/RealEstate.git
   cd RealEstate
   ```


2. **Create & activate a virtual environment**

```
python3 -m venv venv
source venv/bin/activate   # macOS/Linux
.\venv\Scripts\activate    # Windows
```

3. **Install dependencies**
```
pip install -r requirements.txt
```

4. **Configure your database**

- If using PostgreSQL, update settings in settings.py
- Otherwise, Django defaults to SQLite (works out of the box)

5. **Apply migrations**
```
python manage.py makemigrations
python manage.py migrate
```

6. **Run server**
```
python manage.py runserver
```

7. **Visit in browser**

Open `http://127.0.0.1:8000`

## Screenshot
### Home Screenshot
![home](https://github.com/alvinshaita/RealEstate/blob/main/screenshots/home.png)
<br><br>
### Listings Screenshot
![listings](https://github.com/alvinshaita/RealEstate/blob/main/screenshots/listings.png)
<br><br>
### Listing Screenshot
![listing](https://github.com/alvinshaita/RealEstate/blob/main/screenshots/listing.png)
<br><br>
### Admin Screenshot
![admin](https://github.com/alvinshaita/RealEstate/blob/main/screenshots/admin.png)
