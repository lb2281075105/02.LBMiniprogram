1. 本地创建仓库
git init

git add .

git commit -m '提交的描述内容'

// 关联远程仓库项目
git remote add origin https://github.com/lb2281075105/02.LBMiniprogram.git

git push -u origin master

// ---------------------------------------
// 添加tag
git add .
git commit -m '01_知识点1'
git tag 01_知识点1
// git tag (查看项目中有多少个tag)
// git log (查看项目提交信息)
// git status (查看现在仓库的提交状态)

// 强制回退到版本号的那个版本
git reset --hard 版本号
