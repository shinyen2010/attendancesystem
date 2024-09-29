document.getElementById('clockInBtn').addEventListener('click', function() {
    const currentTime = new Date();
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();
    const status = '正常'; // 默认状态

    // 更新打卡时间
    document.getElementById('lastClockIn').innerText = `上次打卡时间: ${date} ${time}`;

    // 添加到打卡历史
    const attendanceBody = document.getElementById('attendanceBody');
    const newRow = attendanceBody.insertRow();
    newRow.innerHTML = `<td>${date}</td><td>${time}</td><td>${status}</td>`;
});
