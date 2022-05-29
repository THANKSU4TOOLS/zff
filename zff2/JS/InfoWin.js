var infoWin;
var tableDom;

function openInfoWin(map, event, content) {
	if (!infoWin) {
		infoWin = new AMap.InfoWindow({
			autoMove: true,
			isCustom: true, //使用自定义窗体
			offset: new AMap.Pixel(140, 140)
		});
	}

	var x = event.clientX;
	var y = event.clientY;
	var lngLat = map.containerToLngLat(new AMap.Pixel(x, y));

	if (!tableDom) {
		let infoDom = document.createElement('div');
		infoDom.className = 'info';
		tableDom = document.createElement('table');
		infoDom.appendChild(tableDom);
		infoWin.setContent(infoDom);
	}

	var trStr = '';
	for (var name in content) {
		var val = content[name];
		trStr +=
			'<tr>' +
			'<td class="label">' + name + '</td>' +
			'<td>&nbsp;</td>' +
			'<td class="content">' + val + '</td>' +
			'</tr>'
	}

	tableDom.innerHTML = trStr;
	infoWin.open(map, lngLat);
}

function closeInfoWin() {
	if (infoWin) {
		infoWin.close();
	}
}
