## React Development

### Quick setup for local development (for now)

Install npm (ideally using nvm) -> https://nodejs.org/en/download/
then...
```
npm install
npm start
```
to get rid of the dependency error (dev dependencies), do
```
npm run build
```

### Replacing the Cover Images
Replacing the images on the front page is fairly straightforward.

**For the header image:**  
1. Head into the src folder to find all the sources files.  
2. Open the components directory to find all the reusable react components.
3. Open `Hero.jsx` and locate the `<img>` tag.  
4. Replace the link inside the `src` field of the tag to a different image.

**For the smaller tile images:**  
1. Head into the src folder to find all the sources files.  
2. Open the components directory to find all the reusable react components.
3. Open `Activities.jsx` and locate the `<img>` tag.  
4. Replace the link inside the `src` field of the tag to a different image.

### Extending the FAQ
To extend the FAQ section of the home page, open up `FAQ.jsx` inside the `components` folder of the `src` directory.  
Reading through the existing code should give you an idea of how to modify the FAQ.  
To add a new question, duplicate the `<Accordian>` tag and change the `question` and `answer` with the format being:
```
<Accordion 
    question='Type in a question here' 
    answer='Type in the answer here' 
/>
```

### Extending the Projects/Archive page
If you view `Projects.jsx`, you'll notice the design pattern that was used to make extension easy. To add a new item, simply duplicate an existing "item" indicated by the square braces and change out the contents. The format is:
```
[
    'image_url',
    'title',
    'authors',
    'game_url'
],
```
`Archive.jsx` follows the same design principle, but has an added level of categorization. Extend the `CategoryContainer` by duplicating a `Category` item. The format is:
```
<Category
    title='category_title'
    content=
    {[
        [
            'image_url1',
            'title1',
            'authors1',
            'game_url1'
        ],
        [
            'image_url2',
            'title2',
            'authors2',
            'game_url2'
        ],
        [
            'image_url3',
            'title3',
            'authors3',
            'game_url3'
        ],
    ]}
/>
``` 

### Installing the Server (from scratch) (may be outdated)
If, for whatever reason, you need to reinstall the droplet from scratch, here are all the steps to do so:

ssh into the droplet or node and run the following commands to install nginx (the web server)
```
sudo apt update
sudo apt install nodejs npm
```
Then, you can follow the steps from "updating" to copy over an optimized production build into the droplet.

**Note: "domain" is a placeholder for your custom domain, make sure you replace it in all terminal commands going forward**  
Next, set up a configuration file for this server by running `sudo nano /etc/nginx/sites-available/domain.com`  
This will open a text editor, paste the contents below
```
server {
    listen 80;
    server_name domain.com www.domain.com;

    root /var/www/react-app;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```
Enable this new configuration by running `sudo ln -s /etc/nginx/sites-available/domain.com /etc/nginx/sites-enabled/`  
You can also optionally delete the default config with `sudo rm /etc/nginx/sites-enabled/default`

To ensure the system has the correct permissions for these, I had to run the two lines below:
```
sudo chown -R www-data:www-data /var/www/react-app
sudo chmod -R 755 /var/www/react-app
```

To enable HTTPS, run the following commands:
```
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d domain.com -d www.domain.com
```

Finally, you can test the server by running `sudo nginx -t`. If the test was successful, run `sudo systemctl reload nginx` and the server should be working.

### Digital Ocean Setup (may be outdated)
If there is no existing, already configured, Digital Ocean droplet, here are the steps to configure a blank droplet.

**Adding an SSH Key:**  
1. From the Digital Ocean dashboard, go to *Settings*.  
2. Click on *Security* at the top.  
3. Click *Add SSH Key*.  
4. There are instructions on the right side of the popup to create a new key if needed.  
5. Paste in your SSH key under *Public Key* and give it a name in *Key Name*.  
6. Hit *Add SSH Key*.  

**Opening up the Firewall:**  
1. From the Digital Ocean dashboard, go to *Networking* and click on *Firewalls*.  
2. Choose an existing Firewall that you are using or hit *Create Firewall*.  
3. Leave outbound rules as is.  
4. Ensure *SSH* with the TCP port 22 already exists, create a new rule if it doesn't.  
5. Click *New rule* and choose HTTP, ensure the *Protocol* is TCP and the *Port Range* is 80.  
6. Click *New rule* and choose HTTPS, ensure the *Protocol* is TCP and the *Port Range* is 443.  
7. Make sure this Firewall is applied to the correct droplet.  

**To use a custom domain for the website:**  
1. From the Digital Ocean dashboard, go to *Networking* and click on *Domains*.  
2. Enter your domain, select the correct droplet, and hit Add Domain.  
3. Click the *More* dropdown on the newly created domain and hig *Manage domain*.  
4. Choose A under *Create a new record*.  
5. Enter `@` into *Hostname*, select the correct droplet from *Will Direct To*, leave *TTL (Seconds)* at the default value, and hit *Create Record*  
6. Choose A under *Create a new record*.  
7. Enter `www` into *Hostname*, select the correct droplet from *Will Direct To*, leave *TTL (Seconds)* at the default value, and hit *Create Record*.  

**Make sure your domain provider is using the digital ocean nameservers:**  
1. If you are using PorkBun, go to the dashboard, and click details on the domain.  
2. Click the *Edit Icon* next to *Nameservers*.  
3. Clear out the text box and paste the following in:
```
ns1.digitalocean.com
ns2.digitalocean.com
ns3.digitalocean.com
```
(This will take a few hours, maybe a day, to kick into effect).

