const timelineList = document.querySelector('.card-render-here');
console.log(timelineList, "timelineList")

//Pull data from firebase

    db.collection('birthday').orderBy("birthdayDate").onSnapshot(snapshot => {
            const info = snapshot.docs;

                setupTimeLine(info);
    })

    const setupTimeLine = (data) => {

        var month = new Array();
                month[0] = "January";
                month[1] = "February";
                month[2] = "March";
                month[3] = "April";
                month[4] = "May";
                month[5] = "June";
                month[6] = "July";
                month[7] = "August";
                month[8] = "September";
                month[9] = "October";
                month[10] = "November";
                month[11] = "December";

        var html = '';
            data.forEach(doc => {

                let timeStamp = doc.data().birthdayDate;
                    var date = new Date( timeStamp * 1000);
                        var m = month[date.getMonth()];
                        console.log('month:', month);
                            var day = date.getDate();
                                console.log(day);
                                    var formattedTime = m + ' - ' + day;
                                        console.log('formatted: ', formattedTime)
                const card = `
                                <li class="event" data-date="${formattedTime}">
                                    <h3>${doc.data().name}</h3>
                                        
                                </li>
                                
                                `;
                                html += card;
            })
                                timelineList.innerHTML = html;
    } 