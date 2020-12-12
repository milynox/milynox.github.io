// Store a ref      to an <img> element    in the myImage variable
let myImage = document.querySelector('img');


// you made      this variable's onclick event handler property equal to 
// a function with no name (an "anonymous function")
// Bạn gán sự kiện onclick của biến này vào một hàm không tên.
// Nghĩa là mỗi lần sự kiện này được gọi thì hàm này hoạt động.
// When this img element is clicked, browser invoke this anonymous function.
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox1.png') {
      myImage.setAttribute('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute('src','images/firefox1.png');
    }
}

// Store a ref    to <buttion> and <h1> element  in two variables.
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    // let myName = prompt('Please enter your name.');
    // // Biến biến myName thành một đối tượng có tên là myName
    // localStorage.setItem('name', myName);
    // myHeading.textContent = 'Mozilla is cool, ' + myName;

    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

// Kiểm tra name data có tồn tại không, nếu không thì gọi hàm setUserName
// để tạo nó
// Nếu có thì dùng tên đó để đổi heading.
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
      // Lấy giá trị được lưu trong đối tượng myName
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }


  myButton.onclick = function() {
    setUserName();
  }


// Vừa có định nghĩa hàm vừa có đoạn mã thực thi trong cùng một file
// Khá là giống python nhỉ.