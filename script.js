document.getElementById('clockInBtn').addEventListener('click', function() {
    const currentTime = new Date();
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();
    const status = '正常'; // 0.00a.m.-12.00p.m.
    const status = '迟到'; // 12.01p.m.-23.59p.m.

    // 更新打卡时间
    document.getElementById('lastClockIn').innerText = `上次打卡时间: ${date} ${time}`;

    // 添加到打卡历史
    const attendanceBody = document.getElementById('attendanceBody');
    const newRow = attendanceBody.insertRow();
    newRow.innerHTML = `<td>${date}</td><td>${time}</td><td>${status}</td>`;
});
