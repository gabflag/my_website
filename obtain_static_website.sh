#!/bin/bash

# Function to kill the process on the specified port
kill_process_on_port() {
  port=$1
  pid=$(lsof -t -i :$port)
  if [ -n "$pid" ]; then
    echo "Killing process on port $port (PID: $pid)..."
    kill -9 $pid
  else
    echo "No process found on port $port."
  fi
}

# Remove existing directories to avoid conflicts
rm -rf static  
rm -rf documentation

# Step 1: Collect static files with Django
echo "Collecting static files with Django..."
cd website
python manage.py collectstatic

# Step 2: Kill the process on port 8000 (if running)
kill_process_on_port 8000

# Step 3: Start the Django server in the background
echo "Starting Django server in the background..."
nohup python manage.py runserver &

# Wait for the server to start (adjust time as needed)
echo "Waiting for the server to start..."
sleep 5

# Step 4: Download the static site using wget
echo "Downloading the site with wget..."
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --no-cache http://localhost:8000
sleep 3

# Step 5: Move the downloaded files to the 'static_site' directory
echo "Moving downloaded files to the 'static_site' directory..."
mv localhost:8000 static_site

# Step 6: Copy presentation images to the correct location
echo "Copying presentation images..."
cp -r static/* static_site/static/

# Step 7: Move the contents of 'static_site' to the parent directory
echo "Moving contents of 'static_site' to the parent directory..."
sleep 3
mv static_site/* ../

# Step 8: Remove the empty 'static_site' folder
echo "Removing the empty 'static_site' folder..."
if [ -d "static_site" ]; then
  rm -rf static_site
fi

# Step 9: Return to the parent directory
echo "Returning to the parent directory..."
cd ..

# Step 10: Fixing static file links in subdirectories
find documentation -type f -name "*.html" -exec sed -i 's|\.\./static/|/static/|g' {} \;

# Step 11: Stop the Django server that was previously started
echo "Stopping the Django server..."
kill_process_on_port 8000

echo "Process completed!"
