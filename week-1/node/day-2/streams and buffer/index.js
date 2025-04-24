const buffer = new Buffer.from("irfan", "utf8");

buffer.write("code")
console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());
