import os
import shutil
import re
from urllib.parse import urlparse

# Определяем категории изображений на основе URL
def get_category_from_url(url):
    if 'static.photos' in url:
        # Извлекаем категорию из URL
        match = re.search(r'static\.photos/([^/]+)/', url)
        if match:
            return match.group(1)
    return 'uncategorized'

# Создаем структуру папок и перемещаем изображения
def organize_images():
    # Путь к папке с изображениями
    images_dir = 'design1/images'
    
    # Создаем папки для категорий
    categories = ['industry', 'construction', 'manufacturing', 'metalwork', 'factory', 
                  'production', 'painting', 'interior', 'welding', 'cnc', 'bending', 'machining', 'uncategorized']
    
    for category in categories:
        category_path = os.path.join(images_dir, category)
        if not os.path.exists(category_path):
            os.makedirs(category_path)
    
    # Перемещаем существующие изображения в папку uncategorized
    for filename in os.listdir(images_dir):
        file_path = os.path.join(images_dir, filename)
        if os.path.isfile(file_path) and not os.path.isdir(file_path):
            # Проверяем, не является ли файл частью новой структуры
            if not any(category in filename for category in categories if category != 'uncategorized'):
                shutil.move(file_path, os.path.join(images_dir, 'uncategorized', filename))
    
    print("Структура папок создана и существующие изображения перемещены.")

# Функция для загрузки изображений по URL
def download_images():
    # Список URL изображений для загрузки
    image_urls = [
        "http://static.photos/industry/1200x630/1",
        "http://static.photos/construction/640x360/51",
        "http://static.photos/industry/640x360/11",
        "http://static.photos/manufacturing/640x360/21",
        "http://static.photos/metalwork/640x360/31",
        "http://static.photos/factory/640x360/41",
        "http://static.photos/construction/640x360/51",
        "http://static.photos/production/640x360/61",
        "http://static.photos/painting/640x360/71",
        "http://static.photos/interior/640x360/81",
        "http://static.photos/manufacturing/320x240/50",
        "http://static.photos/metalwork/320x240/51",
        "http://static.photos/factory/320x240/52",
        "http://static.photos/production/320x240/53",
        "http://static.photos/welding/640x360/10",
        "http://static.photos/welding/640x360/90",
        "http://static.photos/welding/640x360/91",
        "http://static.photos/painting/640x360/20",
        "http://static.photos/cnc/640x360/30",
        "http://static.photos/bending/640x360/40",
        "http://static.photos/machining/640x360/100"
    ]
    
    # Загружаем изображения
    for i, url in enumerate(image_urls):
        category = get_category_from_url(url)
        filename = f"{i+1}.jpg"
        filepath = os.path.join('design1/images', category, filename)
        
        # Проверяем, существует ли файл
        if not os.path.exists(filepath):
            print(f"Загрузка {url} в {filepath}")
            # В реальной реализации здесь был бы код для загрузки файла
            # Например, с использованием requests:
            # import requests
            # response = requests.get(url)
            # with open(filepath, 'wb') as f:
            #     f.write(response.content)
        else:
            print(f"Файл {filepath} уже существует")
    
    print("Загрузка изображений завершена.")

# Основная функция
def main():
    print("Организация структуры папок...")
    organize_images()
    
    print("Загрузка изображений...")
    download_images()
    
    print("Все операции завершены.")

if __name__ == "__main__":
    main()