function insert(num) {
    var textarea = document.form.textarea;
    var jumlah = textarea.value;

    var operators = ['/', '+', '-', '*', '%'];

    if (jumlah === '' && operators.includes(num)) {
        return;
    }
    if (operators.includes(num)) {
        var lastChar = jumlah.charAt(jumlah.length - 1);
        // alert(lastChar);
        if (operators.includes(lastChar)) {
            textarea.value = jumlah.slice(0, -1) + num;
        } else {
            textarea.value = jumlah + num;
        }
    } else {
        textarea.value = jumlah + num;
    }
}
// unutk insert data
function equal() {
    var hasil = document.form.textarea.value;

    if (hasil.includes('%')) {
        var lastChar = hasil.substring(0, hasil.length - 1);

        document.form.textarea.value = eval(lastChar / 100);
    }

    document.form.textarea.value = eval(hasil);
}
// euqal unutk menghitung
function clean() {
    document.form.textarea.value = "";
}
// clen
function del() {
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0, hasil.length - 1);
}
