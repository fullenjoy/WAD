/* 1.  Confirm Git is installed
git --version

2. Configure Git
git config --global user.name "your_username"
git config --global user.email "your_email_address@example.com"
git config --global --list

3. Clone with HTTPS
git clone https://gitlab.com/gitlab-tests/sample-project.git

Create a folder and then create any file in it.

4. Convert a local directory into a repository
git init
git add .
git commit -m "message"
git status

Now open github and create public repo and do not initialize it.

5. Add a remote
git remote add origin https://github.com/fullenjoy/Demo.git
git branch -M main
git push -u origin main

6. Download the latest changes in the project
git pull origin main

7. Create a branch
git checkout -b <name-of-branch>

8. Switch to a branch
git checkout <name-of-branch>
example - git checkout main

9. Delete all changes in the branch
git checkout .
*/
