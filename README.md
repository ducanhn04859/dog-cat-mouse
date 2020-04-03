this project is first demo of Git Series - How to use git

1. git init 
- để cài đặt git trong folder 
2. git statue
- kiểm tra trong thái xem file nào bị sửa hay không
3. git add
-thêm những file sửa
4. git commit -m ''
- đóng gói phiên thay dổi với 1 nhãn trong ""

5. git log
- hiển thị tất cả những đóng gói 
6. git show + <mã gói>
- hiện thị 1 đóng gói nhất định 
7. git diff // diffirent
- xem nội dung thay đổi của những file thay đổi ( không áp dụng những file mới)

8. working directoty 

9. staging area 

10. git repository 

11. git checkout
- xóa những thay đổi trong file 
12. git reset
- thay đổi trạng thái file từ staging area ->  working directoty 

13. git checkout -b <branch> 
- tạo nhánh mới trong git 
13.1 git checkout <ten branch>
- chuyen sang nhanh <ten branch >
14. Git merge 
- ghép 2 nhánh với nhau trong git 
15. git branch -D 
- Xóa branch đi 

16. git reset --soft <code_commit>
- Unpack commit ở trạng thái staging, các commit trc đều biến mất
17. git reset --mixed <code_commit>
-  Unpack commit ở trạng thái working directory, các commit trc đều biến mất
18. git reset --hard <code_commit>
- Unpack commit ở trạng thái ban đầu, các commit trc đều biến mất

19. get revert <commit>
-Trả lại trạng thái lúc trc. Vd bỏ commit bị sai chỉ áp dụng cho 1 commit, các commit trc không bị biến mất

20. .gitignore
- Bỏ qua 1 số file không muốn commit hay k muốn hiển thị

//-------------------------------//
21. git remote add origin <link>
Upload code len github
//<link> được tự tạo trên github sau khi tạo repository vd:https://github.com/ducanhn04859/dog-cat-mouse.git

22. Git remote -v 
Hiển thị tất cả repos

23. git clone
Copy repos trên github về máy tính 
24. Git pull 
Pull từ trên github về máy

25. Pull request
25.1 git checkout -b <feature_branch> // tạo nhánh nhỏ để làm việc
25.2 git push origin <branch> // upload nhánh lên trên github
25.3 create a pull request on Github
25.4 Review code
25.5 Merge to master