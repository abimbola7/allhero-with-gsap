from PIL import Image

def darken_image(input_path, output_path, factor):
    # Open an image file
    with Image.open(input_path) as img:
        # Ensure image is in RGB mode
        img = img.convert("RGB")
        
        # Get image data
        pixels = list(img.getdata())
        
        # Darken each pixel
        darkened_pixels = [(int(r * factor), int(g * factor), int(b * factor)) for r, g, b in pixels]
        
        # Create a new image with the darkened pixels
        darkened_img = Image.new(img.mode, img.size)
        darkened_img.putdata(darkened_pixels)
        
        # Save the darkened image
        darkened_img.save(output_path)

# Example usage
darken_image("input.jpg", "output.jpg", 0.5)
