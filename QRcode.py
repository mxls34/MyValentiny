import qrcode

filename = input("Enter filename to save QR code: ")
urlQRcode = input("Enter URL to generate QR code: ")

QRcode = qrcode.make(urlQRcode)
QRcode.save(f"D:/MyGit/MyValentiny/{filename}.png")

print(f"QR code generated and saved as 'MyValentiny/{filename}.png'")
